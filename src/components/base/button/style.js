import css from '../../../styles/sass.js';

export default ({ brandingTokens, globalTokens }) => css`
  button {
    color: ${brandingTokens['color-base-dark-pure']};
    font-family: ${brandingTokens['font-family-base']};
  }

  .primary {
    border: 0px;
    background-color: blue;
    font-size: ${globalTokens['font-size-xs']};
    font-weight: ${brandingTokens['font-weight-semibold']};
    color: ${brandingTokens['color-base-light-pure']};
    transition: 0.1s;
  }

  .primary.large {
    line-height: ${globalTokens['line-height-distant']};
    padding: ${globalTokens['spacing-squish-sm']};
  }

  .primary.medium {
    line-height: ${globalTokens['line-height-default']};
    padding: ${globalTokens['spacing-squish-sm']};
  }

  .primary.small {
    line-height: ${globalTokens['line-height-tiny']};
    font-size: ${globalTokens['font-size-xxs']};
    padding: ${globalTokens['spacing-squish-nano']};
  }

  .primary.inverse {
    background-color: ${brandingTokens['color-base-light-pure']};
    color: ${brandingTokens['color-base-dark-pure']};
    border: 0;
    box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-pure']};
    -webkit-box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-pure']};
    -moz-box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-pure']};
  }

  .primary.disabled {
    pointer-events: none;
    color: ${brandingTokens['color-base-dark-01']};
    background-color: ${brandingTokens['color-base-light-03']};
    border: 0px;
  }

  .primary:hover {
    border: 0px;
    box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-03']};
    -webkit-box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-03']};
    -moz-box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-03']};
    background-color: ${brandingTokens['color-base-light-pure']};
    color: ${brandingTokens['color-base-dark-pure']};
  }

  .primary:hover.inverse {
    border: 0px;
    box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-pure']};
    -webkit-box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-pure']};
    -moz-box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-pure']};
    background-color: ${brandingTokens['color-base-dark-pure']};
    color: ${brandingTokens['color-base-light-pure']};
  }

  .primary:focus {
    border: 0px;
    box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-03']};
    -webkit-box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-03']};
    -moz-box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-03']};
    background-color: ${brandingTokens['color-base-dark-pure']};
    outline: ${brandingTokens['color-base-light-03']};
    color: ${brandingTokens['color-base-light-pure']};
  }

  .primary:focus.inverse {
    border: 0px;
    box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-03']};
    -webkit-box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-03']};
    -moz-box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-03']};
    background-color: ${brandingTokens['color-base-light-pure']};
    color: ${brandingTokens['color-base-dark-pure']};
  }

  .primary:active {
    border: 0px;
    box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-dark-pure']};
    -webkit-box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-dark-pure']};
    -moz-box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-dark-pure']};
    color: ${brandingTokens['color-base-light-pure']};
    background-color: ${brandingTokens['color-base-dark-pure']};
  }

  .primary:active.inverse {
    border: 0px;
    box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-02']};
    -webkit-box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-02']};
    -moz-box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-02']};
    background-color: ${brandingTokens['color-base-light-02']};
    color: ${brandingTokens['color-base-dark-pure']};
  }

  .secondary {
    border: 0px;
    box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-02']};
    -webkit-box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-02']};
    -moz-box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-02']};
    background: transparent;
    font-size: ${globalTokens['font-size-xs']};
    font-weight: ${brandingTokens['font-weight-semibold']};
    color: ${brandingTokens['color-base-dark-pure']};
    transition: 0.1s;
  }

  .secondary.large {
    line-height: ${globalTokens['line-height-distant']};
    padding: ${globalTokens['spacing-squish-sm']};
  }

  .secondary.medium {
    line-height: ${globalTokens['line-height-default']};
    padding: ${globalTokens['spacing-squish-sm']};
  }

  .secondary.small {
    line-height: ${globalTokens['line-height-tiny']};
    font-size: ${globalTokens['font-size-xxs']};
    padding: ${globalTokens['spacing-squish-nano']};
  }

  .secondary.inverse {
    color: ${brandingTokens['color-base-light-pure']};
    box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-pure']};
    -webkit-box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-pure']};
    -moz-box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-pure']};
  }

  .secondary.disabled {
    pointer-events: none;
    color: ${brandingTokens['color-base-dark-01']};
    background-color: ${brandingTokens['color-base-light-03']};
    border: 0px;
    box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-03']};
    -webkit-box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-03']};
    -moz-box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-03']};
  }

  .secondary:hover {
    border: 0px;
    box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-dark-pure']};
    -webkit-box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-dark-pure']};
    -moz-box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-dark-pure']};
    background-color: ${brandingTokens['color-base-dark-pure']};
    color: ${brandingTokens['color-base-light-pure']};
  }

  .secondary:hover.inverse {
    border: 0px;
    box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-pure']};
    -webkit-box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-pure']};
    -moz-box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-pure']};
    background-color: ${brandingTokens['color-base-light-pure']};
    color: ${brandingTokens['color-base-dark-pure']};
  }

  .secondary:focus {
    border: 0px;
    box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-03']};
    -webkit-box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-03']};
    -moz-box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-03']};
    background-color: transparent;
    outline: ${brandingTokens['color-base-light-03']};
    color: ${brandingTokens['color-base-dark-pure']};
  }

  .secondary:focus.inverse {
    border: 0px;
    box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-03']};
    -webkit-box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-03']};
    -moz-box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-03']};
    background-color: transparent;
    color: ${brandingTokens['color-base-light-03']};
  }

  .secondary:active {
    border: 0px;
    box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-02']};
    -webkit-box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-02']};
    -moz-box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-02']};
    color: ${brandingTokens['color-base-dark-pure']};
    background-color: ${brandingTokens['color-base-light-02']};
  }

  .secondary:active.inverse {
    border: 0px;
    box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-02']};
    -webkit-box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-02']};
    -moz-box-shadow: inset 0px 0px 0px ${globalTokens['border-width-thin']}
      ${brandingTokens['color-base-light-02']};
    background-color: ${brandingTokens['color-base-light-02']};
    color: ${brandingTokens['color-base-dark-pure']};
  }
`;
