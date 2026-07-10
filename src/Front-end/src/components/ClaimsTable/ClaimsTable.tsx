import { useMemo, useState } from "react";
import {
  ActionIcon,
  Badge,
  Button,
  Group,
  Text,
  Tooltip,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { modals } from "@mantine/modals";
import {
  createRow,
  MantineReactTable,
  MRT_EditActionButtons,
  type MRT_ColumnDef,
  useMantineReactTable,
} from "mantine-react-table";
import {
  IconEdit,
  IconPlus,
  IconTrash,
} from "@tabler/icons-react";
import { useClaimsQuery } from "../../api/claims/claims.query";
import {
  useCreateClaimMutation,
  useDeleteClaimMutation,
  useUpdateClaimMutation,
} from "../../api/claims/claims.mutation";
import {
  formatClaimDate,
  parseClaimDate,
} from "../../api/claims/claims.helpers";
import type { Claim } from "../../mocks/data/claims.types";
import * as Styled from "./ClaimsTable.styled";
import { claimStatusOptions, claimTypeOptions, statusColorMap } from "./ClaimsTable.constants";
import {
  createEmptyClaim,
  formatMoney,
  normalizeClaim,
  type ValidationErrors,
  validateClaim,
} from "./ClaimsTable.utils";

export const ClaimsTable = () => {
  // Validation state is reused by both onCreatingRowSave and onEditingRowSave.
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});

  const { data: claims = [], isLoading, isFetching, isError } = useClaimsQuery();
  const { mutateAsync: createClaim, isPending: isCreating } =
    useCreateClaimMutation();
  const { mutateAsync: updateClaim, isPending: isUpdating } =
    useUpdateClaimMutation();
  const { mutateAsync: deleteClaim, isPending: isDeleting } =
    useDeleteClaimMutation();

  // Column definitions follow MRT inline-row editing pattern with field-level validation.
  const columns = useMemo<MRT_ColumnDef<Claim>[]>(
    () => [
      {
        accessorKey: "claimNumber",
        header: "Číslo události",
        mantineEditTextInputProps: {
          required: true,
          error: validationErrors.claimNumber,
          onFocus: () =>
            setValidationErrors((current) => ({
              ...current,
              claimNumber: undefined,
            })),
        },
      },
      {
        accessorKey: "policyholder",
        header: "Klient",
        mantineEditTextInputProps: {
          required: true,
          error: validationErrors.policyholder,
          onFocus: () =>
            setValidationErrors((current) => ({
              ...current,
              policyholder: undefined,
            })),
        },
      },
      {
        accessorKey: "vehicle",
        header: "Vozidlo",
        mantineEditTextInputProps: {
          required: true,
          error: validationErrors.vehicle,
          onFocus: () =>
            setValidationErrors((current) => ({
              ...current,
              vehicle: undefined,
            })),
        },
      },
      {
        accessorKey: "registrationPlate",
        header: "SPZ",
        mantineEditTextInputProps: {
          required: true,
          error: validationErrors.registrationPlate,
          onFocus: () =>
            setValidationErrors((current) => ({
              ...current,
              registrationPlate: undefined,
            })),
        },
      },
      {
        accessorKey: "claimType",
        header: "Typ",
        editVariant: "select",
        mantineEditSelectProps: {
          data: claimTypeOptions,
          searchable: false,
        },
      },
      {
        accessorKey: "status",
        header: "Stav",
        editVariant: "select",
        mantineEditSelectProps: {
          data: claimStatusOptions,
          searchable: false,
        },
        Cell: ({ cell }) => {
          const status = cell.getValue<Claim["status"]>();

          return (
            <Badge color={statusColorMap[status]} variant="light" radius="sm">
              {status}
            </Badge>
          );
        },
      },
      {
        accessorKey: "incidentDate",
        header: "Datum nehody",
        Edit: ({ cell, column, row, table }) => {
          const currentValue = parseClaimDate(String(cell.getValue<string>() ?? ""));
          const isCreating = table.getState().creatingRow?.id === row.id;
          const isEditing = table.getState().editingRow?.id === row.id;
          const errorMessage = validationErrors.incidentDate;

          return (
            <DatePickerInput
              value={currentValue}
              valueFormat="DD.MM.YYYY"
              popoverProps={{ withinPortal: true }}
              style={{ minWidth: 150 }}
              onChange={(nextValue) => {
                // Keep MRT internal row cache in sync so Save receives the selected date.
                row._valuesCache[column.id] = formatClaimDate(nextValue);
                if (isCreating) {
                  table.setCreatingRow(row);
                } else if (isEditing) {
                  table.setEditingRow(row);
                }
              }}
              error={errorMessage}
            />
          );
        },
      },
      {
        accessorKey: "reportedDate",
        header: "Nahlášeno",
        Edit: ({ cell, column, row, table }) => {
          const currentValue = parseClaimDate(String(cell.getValue<string>() ?? ""));
          const isCreating = table.getState().creatingRow?.id === row.id;
          const isEditing = table.getState().editingRow?.id === row.id;
          const errorMessage = validationErrors.reportedDate;

          return (
            <DatePickerInput
              value={currentValue}
              valueFormat="DD.MM.YYYY"
              popoverProps={{ withinPortal: true }}
              style={{ minWidth: 150 }}
              onChange={(nextValue) => {
                // Keep MRT internal row cache in sync so Save receives the selected date.
                row._valuesCache[column.id] = formatClaimDate(nextValue);
                if (isCreating) {
                  table.setCreatingRow(row);
                } else if (isEditing) {
                  table.setEditingRow(row);
                }
              }}
              error={errorMessage}
            />
          );
        },
      },
      {
        accessorKey: "damageEstimate",
        header: "Odhad škody",
        mantineEditTextInputProps: {
          type: "number",
          error: validationErrors.damageEstimate,
          onFocus: () =>
            setValidationErrors((current) => ({
              ...current,
              damageEstimate: undefined,
            })),
        },
        Cell: ({ cell }) => `${formatMoney(Number(cell.getValue<number>()))} Kč`,
      },
      {
        accessorKey: "approvedAmount",
        header: "Schváleno",
        mantineEditTextInputProps: {
          type: "number",
          error: validationErrors.approvedAmount,
          onFocus: () =>
            setValidationErrors((current) => ({
              ...current,
              approvedAmount: undefined,
            })),
        },
        Cell: ({ cell }) => `${formatMoney(Number(cell.getValue<number>()))} Kč`,
      },
      {
        accessorKey: "adjuster",
        header: "Likvidátor",
        mantineEditTextInputProps: {
          required: true,
          error: validationErrors.adjuster,
          onFocus: () =>
            setValidationErrors((current) => ({
              ...current,
              adjuster: undefined,
            })),
        },
      },
    ],
    [validationErrors],
  );

  const table = useMantineReactTable({
    columns,
    data: claims,
    createDisplayMode: "row",
    editDisplayMode: "row",
    enableEditing: true,
    enableColumnResizing: true,
    enableRowActions: true,
    getRowId: (row) => row.id,
    initialState: {
      density: "xs",
    },
    layoutMode: "grid",
    mantineTableContainerProps: {
      sx: {
        minHeight: 560,
        maxWidth: "100%",
        overflowX: "auto",
      },
    },
    onCreatingRowCancel: () => {
      setValidationErrors({});
    },
    onCreatingRowSave: async ({ exitCreatingMode, values }) => {
      // Validate before writing to mock API to avoid persisting incomplete records.
      const newValidationErrors = validateClaim(values);
      if (Object.values(newValidationErrors).some(Boolean)) {
        setValidationErrors(newValidationErrors);
        return;
      }

      setValidationErrors({});
      await createClaim(normalizeClaim(values, `claim-${Date.now()}`));
      exitCreatingMode();
    },
    onEditingRowCancel: () => {
      setValidationErrors({});
    },
    onEditingRowSave: async ({ row, table: mrtTable, values }) => {
      // Validate before writing to mock API to avoid persisting incomplete records.
      const newValidationErrors = validateClaim(values);
      if (Object.values(newValidationErrors).some(Boolean)) {
        setValidationErrors(newValidationErrors);
        return;
      }

      setValidationErrors({});
      await updateClaim(normalizeClaim(values, row.original.id));
      mrtTable.setEditingRow(null);
    },
    displayColumnDefOptions: {
      "mrt-row-actions": {
        header: "Actions",
        size: 140,
      },
    },
    positionActionsColumn: "first",
    renderRowActions: ({ row, table: mrtTable }) => {
      const activeEditingRowId = mrtTable.getState().editingRow?.id;
      const hasActiveCreateRow = Boolean(mrtTable.getState().creatingRow);
      const isEditingCurrentRow = activeEditingRowId === row.id;
      // Only one existing row can be edited at a time.
      const hasActiveEditingAnotherRow = Boolean(
        activeEditingRowId && activeEditingRowId !== row.id,
      );
      const isEditingRow =
        isEditingCurrentRow || mrtTable.getState().creatingRow?.id === row.id;

      if (isEditingRow) {
        return <MRT_EditActionButtons row={row} table={mrtTable} variant="icon" />;
      }

      const handleDelete = () => {
        modals.openConfirmModal({
          title: "Smazat pojistnou událost?",
          children: (
            <Text size="sm">
              Opravdu chcete smazat událost {row.original.claimNumber}? Tato akce
              je nevratná.
            </Text>
          ),
          labels: {
            confirm: "Smazat",
            cancel: "Zrušit",
          },
          confirmProps: {
            color: "red",
          },
          onConfirm: async () => {
            await deleteClaim(row.original.id);
          },
        });
      };

      return (
        <Group spacing="xs" noWrap>
          <Tooltip label="Upravit" withinPortal>
            <ActionIcon
              aria-label="Upravit"
              disabled={hasActiveCreateRow || hasActiveEditingAnotherRow}
              onClick={() => {
                // Prevent switching edit target while create/edit mode is active on another row.
                if (!hasActiveCreateRow && !hasActiveEditingAnotherRow) {
                  mrtTable.setEditingRow(row);
                }
              }}
            >
              <IconEdit size={18} />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="Smazat" withinPortal>
            <ActionIcon aria-label="Smazat" color="red" onClick={handleDelete}>
              <IconTrash size={18} />
            </ActionIcon>
          </Tooltip>
        </Group>
      );
    },
    renderTopToolbarCustomActions: ({ table: mrtTable }) => (
      <Button
        leftIcon={<IconPlus size={16} />}
        // Prevent creating multiple temporary rows at the same time.
        disabled={Boolean(
          mrtTable.getState().editingRow || mrtTable.getState().creatingRow,
        )}
        onClick={() => {
          mrtTable.setCreatingRow(createRow(mrtTable, createEmptyClaim()));
        }}
      >
        Nová událost
      </Button>
    ),
    state: {
      isLoading,
      isSaving: isCreating || isUpdating || isDeleting,
      showAlertBanner: isError,
      showProgressBars: isFetching,
    },
  });

  return (
    <Styled.PageContainer>
      <Styled.HeaderBlock>
        <Styled.Title>Pojistné události</Styled.Title>
      </Styled.HeaderBlock>
      <Styled.TableShell>
        <MantineReactTable table={table} />
      </Styled.TableShell>
    </Styled.PageContainer>
  );
};