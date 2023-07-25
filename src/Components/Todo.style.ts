import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   width: 20rem;
   justify-content: center;
   flex-direction: column;
   background-color: #f9f7f7;
   border-radius: 0.625rem;
   padding: 0 1rem 3rem 1rem;
   @media screen and (min-width: 1200px) {
      width: 30rem;
   }
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
   gap: 5px;
   input {
      font-size: 1rem;
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
      right: 4px;
      border: none;
      padding: 0.4rem 1rem;
      background-color: #aaa;
      color: white;
      border-radius: 0.3rem;
   }
   button:hover {
      background-color: #b8abab;
   }
   button:active {
      transform: scale(0.96);
      background-color: #d6d3d3;
   }
`;

export const Line = styled.div`
   display: flex;
   margin: 4rem 0 2rem 0;
   justify-content: center;
   div {
      width: 19em;
      border-bottom: 2px solid rgba(0, 0, 0, 0.5);
   }
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
      gap: 3px;
      align-items: center;
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
         border: 2px solid black;
      }
      button {
         border: 2px solid black;
         padding: 6px;
         border-radius: 0.3rem;
         background-color: red;
         height: 3rem;
      }
      button:hover {
         background-color: rgb(207, 69, 69);
         transform: scale(0.96);
      }
   }
`;
