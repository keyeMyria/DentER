import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  View
} from "native-base";
import { NavigationActions } from "react-navigation";

import { Alert } from "react-native";

import styles from "./styles";
export interface Props {
  navigation: any;
  surveyQuestions: any;
  reset: Function;
  submit: Function;
}
const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "Drawer" })]
});
export interface State {}
class Additional extends React.Component<Props, State> {
  confirmSubmit() {
    // Actually submit form
    Alert.alert(
      "Confirm Submission",
      "Are you sure you want to submit your dentist submission?",
      [
        {
          text: "Yes",
          onPress: () => {
            console.log("Submitted");
            this.props.submit();
            this.props.navigation.dispatch(resetAction);
          }
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        }
      ],
      { cancelable: false }
    );
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.dispatch(resetAction)}
            >
              <Icon name="ios-close" />
            </Button>
          </Left>

          <Body style={{ flex: 3 }}>
            <Title>New Submission Request</Title>
          </Body>

          <Right>
            <Button transparent onPress={() => this.props.reset()}>
              <Icon name="ios-refresh" />
            </Button>
          </Right>
        </Header>

        <Content padder>
          {this.props.surveyQuestions}
          {/* View to add padding so can scroll to bottom item */}
          <View style={{ marginBottom: 100 }} />
        </Content>

        {/* Survey Navigation */}
        <View style={styles.navigation}>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon
              name="arrow-back"
              style={{ color: "white", marginRight: 10, fontSize: 45 }}
            />
            <Text style={{ color: "white", paddingLeft: 0, fontSize: 20 }}>
              Previous
            </Text>
          </Button>
          <Button transparent onPress={() => this.confirmSubmit()}>
            <Text style={{ color: "white", paddingRight: 0, fontSize: 20 }}>
              Submit
            </Text>
            <Icon
              name="arrow-forward"
              style={{ color: "white", marginLeft: 10, fontSize: 45 }}
            />
          </Button>
        </View>
      </Container>
    );
  }
}

export default Additional;
