import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: column;
   background-color: #f9f7f7;
   border-radius: 0.625rem;
   padding: 0 1rem;
`;

export const Title = styled.div`
   display: flex;
   justify-content: center;
   h1 {
      font-family: Ubuntu, "sans";
      color: #112d4e;
      font-weight: 400;
   }
`;

export const InputWrapper = styled.div`
   display: flex;
   justify-content: center;
   input {
      background-color: #dbe2ef;
      border: none;
      border-radius: 0.3rem;
      padding: 0.5rem;
   }
   input::placeholder {
      color: #7b7b7b;
      font-size: 1rem;
   }
   button {
      font-size: 40px;
      position: relative;
      right: 4px;
      border: none;
      padding: 0.4rem 1rem;
      background-color: #aaa;
      color: white;
      border-top-right-radius: 0.3rem;
      border-bottom-right-radius: 0.3rem;
   }
`;

export const Line = styled.div`
   width: 19rem;
   display: flex;
   margin: 4rem 0 2rem 0;
   justify-content: center;
   border-bottom: 2px solid rgba(0, 0, 0, 0.5);
`;

export const List = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   list-style: none;
   flex-direction: column;
   margin-bottom: 1rem;
   gap: 1rem;
   li {
      display: flex;
      padding: 0 1rem;
      span {
         padding: 0.9rem 0.8rem;
         width: 15rem;
         word-break: break-all;
         border-radius: 0.3rem;
         display: flex;
         font-family: Ubuntu, "sans";
         justify-content: center;
         background-color: #dbe2ef;
      }
   }
`;
