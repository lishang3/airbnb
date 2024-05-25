import styled from "styled-components";


export const RightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  align-items: center;

  color: ${props => props.theme.text.primaryColor};
  font-weight: 600;

  .btns {
    display: flex;
    color: ${props => props.theme.isAlpha ? "#fff" : props.theme.text.primaryColor};



    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      border-radius: 22px;
      cursor: pointer;

      
       &:hover {
        background-color: ${props => props.theme.isAlpha ? "rgba(255,255,255,.1)" : "#f5f5f5"};
      }
    }
  }

  .profile {
    position: relative;
    margin-right: 24px;
    border: 1px solid #ccc;
    border-radius: 25px;
    width: 77px;
    height: 42px;
    display: flex;
    box-sizing: border-box;
    justify-content: space-evenly;
    align-items: center;
    background-color: #fff;
    color: ${props => props.theme.text.primaryColor};
    cursor: pointer;

    ${props => props.theme.mixin.boxShadow}

    .panel {
      position: absolute;
      top: 54px;
      right: 0;
      width: 240px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0, 0, 0, .2);
      color: #666;

      .top, .bottom {
        padding: 10px 0;

        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }

      .top {
        border-bottom: 1px solid #ddd;
      }
    }
  }
`