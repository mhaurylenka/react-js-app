import styled from 'styled-components';

export const Checkbox = styled.div`
    color: ${props => props.box ? 'green' : 'black'};
    font-weight: ${props => props.box ? 'bold' : 'normal'};
    font-size: ${props => props.box ? '18px' : '16px'};

    input {
      margin: 10px;
      width: ${props => props.box ? '18px' : '16px'};
      height: ${props => props.box ? '18px' : '16px'};
    }

    label:hover {
      color: ${props => props.box ? 'limegreen' : '#505050'};
    }
`;