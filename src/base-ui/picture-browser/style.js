import styled from "styled-components";

export const BrowserWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color:#333;

  .top {
    position: relative;
    height: 86px;

    .close-btn {
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
    }
  }

  .slider {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;

    .control {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        cursor: pointer;
      }
    }

    .picture {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100%;
      max-width: 105vh;

      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        /* margin: 0 auto; */
        height: 100%;
        user-select: none;
      }

      .pic-enter {
        transform: translateX(${props => props.isNext ? "100%" : "-100%"});
        /* transform: translateX(100%); */
        opacity: 0;
      }

      .pic-enter-active {
        transform: translate(0);
        opacity: 1;
        transition: all 200ms ease;
      }

      .pic-exit {
        opacity: 1;
      }

      .pic-exit-active {
        opacity: 0;
        transition: all 200ms ease;
      }
    }
  }

  .preview {
      height: 100px;
      margin-top: 10px;
      display: flex;
      justify-content: center;


      .info {
        position: absolute;
        max-width: 105vh;
        color: #fff;
        bottom: 10px;


        .desc {
          display: flex;
          justify-content: space-between;

          .toggle {
            cursor: pointer;
          }
        }

        .list {
          margin-top: 3px;
          overflow: hidden;
          transition: height 300ms ease;
          height: ${props => props.showList ? '67px' : '0'};

          .item {
            margin-right: 15px;
            cursor: pointer;

            img {
              height: 67px;
              opacity: 0.5;
            }

            &.active {
              img {
                opacity: 1;
              }
            }
          }
        }
      }
    }
`