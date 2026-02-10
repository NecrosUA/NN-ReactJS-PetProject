import * as Styled from "./UserEmailButtonMobile.styled";
import Image from 'react-bootstrap/Image';
import emailIcon from '../../images/emailIcon.svg';

export const UserEmailButtonMobile = () => {
    return (
            <Styled.MobileEmailButton
                type="button"
                aria-label="Send email to insurecar"
                onClick={() => { window.location.href = 'mailto:insurecar@example.com'; }}

            >
                <Image src={emailIcon} alt="Send email" />
            </Styled.MobileEmailButton>
    );
};