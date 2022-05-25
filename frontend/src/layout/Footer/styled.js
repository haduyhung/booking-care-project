import styled from "styled-components";

const FooterWrapper = styled.div`
  background-color: #efefef;

  .Container{
    padding-top: 30px;
    
    .link{
      text-decoration-line: none;
      color: #45c3d2;
    }

    & > .footer-top{
      width: 100%;
      justify-content: space-between;
      display: flex;
      border-bottom: 1px solid gray;

      & > .ft-left{
        width: 50%;

        & > .img-logo{
          max-width: 30%;
        }

        & > .information{
          width: 100%;

          .name{
            font-weight: bold;
            font-size: 16px;
          }

          .info{
            font-size: 16px;
            font-weight: lighter;
            line-height: 20px;
            display: flex;
          }

          & > .img-logo-bo{
            width: 40%;
            padding-right: 4px;
          }
        }
      }

      & > .ft-center{
        width: 30%;


        ul{
          list-style: none;
        }

        li{
          padding-bottom: 10px;
          font-size: 16px;
          font-weight: 0;
        }
      }

      & > .ft-right{
        width: 30%;

        ul{
          list-style: none;
        }

        .title{
          font-size: 16px;
          font-weight: bold;

        }

        .address{
          font-weight: normal;
          font-size: 16px;
          padding-bottom: 20px;
          font-weight: lighter;
        }
      }
    }

    & > .footer-bottom{
      padding-bottom: 15px;
      display: flex;

      .icons{
        padding-top: 15px;
      }
    }
  }

  @media (max-width: 500px) {
    .footer-top{
      width: 100%;
      display: flex;
      flex-direction: column;

      .ft-left{
        width: 100%;
      }

    }
    .ft-center{
      width: 100%;
    }
    .ft-right{
      width: 100%;
    }
  }
`

export default FooterWrapper;