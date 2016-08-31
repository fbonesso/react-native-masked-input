'use strict';

var React = require('react');
var {
    View,
    TextInput
} = require('react-native');

var MaskedInput = React.createClass({
    propTypes: {
        style: React.PropTypes.object,
        maskType: React.PropTypes.object,
        currencySymbol: React.PropTypes.object,
        currencySeparator: React.PropTypes.object
    },

    getInitialState() {
      return {
        value: this.props.value?this.props.value:""
      };
    },

    _onChangeText(value) {
      value = value.split(this.props.currencySymbol).join("");

      if (value != "") {
        if (this.props.maskType == "money") {
          value = value.replace(/\D/g, "");

          value = this.props.currencySymbol + value.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1" + this.props.currencySeparator);
        }

        if (this.props.maskType == "phone") {
          if (value.length < 15) {
              value = value.replace(/\D/g, "");
              value = value.replace(/^(\d\d)(\d)/g, "($1) $2");
              value = value.replace(/(\d{4})(\d)/, "$1-$2");
          }
          else if (value.length == 15) {
              value = value.replace(/\D/g, "");
              value = value.replace(/^(\d\d)(\d)/g, "($1) $2");
              value = value.replace(/(\d{5})(\d)/, "$1-$2");
          }
          else {
              value = value.substring(0, value.length - 1);
          }
        }
      }

      this.setState({value: value});
    },

    render() {
        const defaultStyles = {
          padding:10
        };

        return (
            <TextInput
              {...this.props}
              value={this.state.value}
              style={this.props.style?this.props.style:defaultStyles}
              onChangeText={(value) => this._onChangeText(value)}
            />
        );
    }
});

module.exports = MaskedInput;
