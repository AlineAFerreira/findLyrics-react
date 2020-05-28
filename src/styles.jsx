import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {    
    font-family: 'Poppins', sans-serif;
    color: #707070;
  }

  .main {
    display: flex;
    height: 100%;
    flex-direction: column;
  }

  .content {
    flex: 1;
    padding: 20px 50px;
    position: relative;
  }

  .Toastify__toast--info {
    background: 'rgb(51, 102, 255)';
  }
  .Toastify__toast--success {
      background: 'rgb(51, 187, 102)';
    }
  .Toastify__toast--warning {
      background: 'blue';
    }
  .Toastify__toast--error {
    background-color: #FF5761 !important;
    box-shadow: rgba(0, 0, 0, 0.176) 0px 3px 8px;
    border-radius: 4px;
  }
  .react-toast-notifications__toast__content {

  }

  @media (min-width: 768px) {
    body {
      margin-left: 40%;
    }
  }
`;

