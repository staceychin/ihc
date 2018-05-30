import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View
} from 'react-native';

import SuccessErrorMessages from './SuccessErrorMessages';
import Loading from './Loading';

/* Common wrapper around Screens. Includes code for the ScrollView,
 * Success/Error messages, and Loading indicator
 */
export default class Container extends Component<{}> {
  /*
   * props:
   * loading: boolean true if the component is loading
   * successMsg: null or string
   * errorMsg: null or string
   * children: the JSX that will be displayed within the container
   * patientKey: the patientKey to mark as upload in case loading is canceled,
   *   or null if not needed
   * setErrorMsg: function to set error msg if cancel button is clicked
   *   or null if not needed
   * cancelLoading: function that turns off loading in parent
   *
   * use Container like
   * <Container loading={this.state.loading}>
   *  <Text>Text</Text>
   * </Container>
   */
  constructor(props) {
    super(props);
  }

  render = () => {
    if (this.props.loading) {
      return (
        <View style={styles.outside}>
          <Loading
            patientKey={this.props.patientKey}
            setErrorMsg={this.props.setErrorMsg}
            cancelLoading={this.props.cancelLoading}
          />
        </View>
      );
    }

    return (
      <View style={styles.outside}>
        <ScrollView contentContainerStyle={styles.container}>
          {this.props.children}
        </ ScrollView>

        <SuccessErrorMessages errorMsg={this.props.errorMsg}
          successMsg={this.props.successMsg} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outside: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 0,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
