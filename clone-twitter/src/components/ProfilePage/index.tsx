import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar />
        </Banner>

        <ProfileData>
            <EditButton outlined>Editar perfil</EditButton>
            <h1>Luana Sales</h1>
            <h2>@aka_luana</h2>

            <p>
                from home import education || ela/dela
            </p>

            <ul>
                <li>
                    <LocationIcon />
                    Blumenau, SC
                </li>
                <li>
                    <CakeIcon />
                    Nascido(a) em 17 de maio de 2001
                </li>
            </ul>

            <Followage>
                <span>
                    seguindo <strong>361</strong>
                </span>
                <span>
                <strong>396 </strong> seguidores 
                </span>
            </Followage>
        </ProfileData>
    </Container>
    );
}

export default ProfilePage;