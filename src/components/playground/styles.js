import css from '../../styles/sass.js';

export default () => css`
  div {
    display: flex;
    height: 100%;
    width: 100%;

    aside {
      background-color: #141414;
      color: white;
      margin: 0;
      overflow: auto;
      padding: 40px;
      width: 20%;

      h1 {
        font-size: 14px;
        font-weight: 400;
        margin: 0;
      }

      h2 {
        font-size: 24px;
        font-weight: 700;
        margin: 0 0 24px 0;
      }

      section {
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;

        h3 {
          border-bottom: 1px solid white;
          font-size: 14px;
          font-weight: 700;
          margin: 0 0 16px 0;
          padding-bottom: 4px;
          width: 100%;
        }

        label {
          color: #b7b7b7;
          font-size: 14px;
          font-weight: 400;
          margin-bottom: 5px;

          &.disabled {
            color: #525252;
          }
        }

        select {
          appearance: none;
          background: url('/assets/select-arrow.png') no-repeat 95% center
            #141414;
          border: 1px solid #b7b7b7;
          color: #b7b7b7;
          font-family: 'Space Mono', sans-serif;
          font-size: 14px;
          font-weight: 400;
          margin-bottom: 14px;
          opacity: 1;
          padding: 7px;
          -moz-appearance: none;
          -webkit-appearance: none;

          &:disabled {
            background-image: url('/assets/select-arrow-disabled.png');
            border-color: #525252;
            color: #525252;
          }

          &:not(:disabled) {
            &:focus,
            &:active,
            &:hover {
              border-color: #ffffff;
            }
          }
        }
      }

      &::-webkit-scrollbar,
      &::-webkit-scrollbar-track {
        background-color: #0c0c0c;
      }

      &::-webkit-scrollbar {
        width: 8px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #242424;
      }
    }

    main {
      align-items: center;
      background-color: #181818;
      display: flex;
      justify-content: center;
      width: 100%;

      div {
        align-items: center;
        background-color: #f50047;
        border-radius: 24px;
        height: 190px;
        justify-content: center;
        width: 190px;

        span {
          color: #00f5ab;
          font-family: 'Space Mono', sans-serif;
          font-size: 16px;
          font-weight: 700;
          mix-blend-mode: difference;
        }
      }
    }
  }
`;
