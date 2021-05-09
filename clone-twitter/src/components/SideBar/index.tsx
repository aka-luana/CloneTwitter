import React from 'react';
import StickBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import { Container,
        SearchWrapper,
        SearchInput,
        SearchIcon,
        Body
 } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
        <SearchWrapper>
            <SearchInput placeholder="Buscar no Twitter" />
            <SearchIcon />
        </SearchWrapper>
        <StickBox>
            <Body>
                <List 
                    title="Talvez você curta"
                    elements={[
                        <FollowSuggestion 
                            name="Amanda.zip"
                            nickname="@HassAmanda_"
                        />,
                        <FollowSuggestion 
                            name="Lexi's"
                            nickname="@alexia_efe"
                        />,
                        <FollowSuggestion 
                            name="And"
                            nickname="@QueridoAnd"
                        />
                    ]}
                />

                <List 
                    title="O que está acontecendo?"
                    elements={[
                        <News />
                    ]}
                />
            </Body>
        </StickBox>
    </Container>
    );
}

export default SideBar;