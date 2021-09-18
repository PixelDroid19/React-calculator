import styled from "styled-components";

export const CustomBox = styled.div`
  display: grid;
  margin: 30px auto;
  width: 400px;
  height:100%;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const BoxButtonMain = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 80% 20%;
`;

export const CustomBoxButton2 = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(auto-fit, minmax(auto, 90px));
  justify-content: center;
  align-content: center;
  place-content: center;
  gap: 5px;
`;

export const CustomBoxButton = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(auto-fit, minmax(auto, 90px));
  justify-content: center;
  align-content: center;
  place-content: center;
  gap: 5px;
`;

export const CustomInput = styled.input`
 color:white;
  width: 100%;
  height: 70px;
  border-radius: 10px;
  outline: none;
  background-color: rgba(0,0,0, 0.4);
  font-size: 38px;
  &::placeholder { 
    color:rgba(255,255,255, 0.5);
    }
`;

export const ButtonInput = styled.input`
text-align: center;
font-size: 26px;
  width: 80px;
  height: 80px;
`;

export const CustomButton = styled.button`
  font-size: 40px;
  width: 80px;
  height: 80px;
`;
