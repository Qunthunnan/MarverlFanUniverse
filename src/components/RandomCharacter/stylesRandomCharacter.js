import styled from "styled-components";
import { vars } from "../style/Vars";
import hammer from '../../resources/imgs/hammer.png';

const Wrapper = styled.section`
@media ( min-width: 320px) {
    display: flex;
    flex-direction: column;
    box-shadow: 0px 3px 15px 1px rgba(0, 0, 0, 0.3);
}

@media (min-width: 768px) {
    display: grid;
    grid-template: auto / 1fr 1fr;
}
`;

const RandomCharacterInfo = styled.div`
@media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    padding: 20px;
    img { 
        object-fit: cover;
    }
    h2 {
        margin: 10px 0 0 0;
        font-size: 22px;
        font-weight: 700;
    }
    p {
        line-height: 16px;
        font-size: 14px;
        font-weight: 400;
        margin: 10px 0 0 0;
    }
}

@media (min-width: 768px) {
    flex-direction: row;
    column-gap: 14px;
    padding: 20px;

    h2 {
        margin: 0;
    }
    img {
        height: 140px;
        width: 140px;
    }
}

@media (min-width: 992px) {
    padding: 35px 40px;
    img {
        height: 180px;
        width: 180px;
    }
}

@media (min-width: 1200px) {
    column-gap: 40px;
}
`,
InfoWrapper = styled.div`

`;

const ButtonsWrapper = styled.div`
@media (min-width: 320px) {
    width: 100%;
    margin: 15px 0 0 0;
    display: flex;
    justify-content: space-around;
}

@media (min-width: 576px) {
    flex-direction: column;
    row-gap: 10px;
}

@media (min-width: 992px) {
    flex-direction: row;
    row-gap: 0;
}

@media (min-width: 1200px) {
    justify-content: flex-start;
    column-gap: 30px;
}
`;


const RandomBaner = styled.div`
    @media (min-width: 320px) {
        display: flex;    
        flex-direction: column;
        justify-content: space-between;
        background: url(${hammer}) no-repeat 110% 77%;
        padding: 20px;
        color: #fff;
        background-color: ${vars.lightBlack};
        h2 {
            margin: 0;
            font-size: 18px;
            font-weight: 700;
            &:nth-child(2) {
                margin: 10px 0 0 0;
            }
        }

        button {
            margin: 10px 0 0 0;
        }
    }

    @media (min-width: 576px) {
        h2 {
            font-size: 24px;
            &:nth-child(2) {
                margin: 20px 0 0 0;
            }
        }
    }

    @media (min-width: 768px) {
        padding: 20px;
    }

    @media (min-width: 992px) {
        padding: 35px 40px;
    }
`;

export { Wrapper, RandomCharacterInfo, InfoWrapper, ButtonsWrapper, RandomBaner };