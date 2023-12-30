import { StyleSheet, Text, View, Image } from 'react-native';
import React from "react"

/**
 * Header
 * MyProfile
 * Division
 * FriendSection
 * FriendList
 */

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="친구" />
      <MyProfile />
      <Division />
      <FriendSection />
      <FriendList />
    </View>
  )
}

const Header = (props) => {
  return <Text>{props.title}</Text>;
}
const MyProfile = () => {
  return <Profile
    name="지은"
    uri="https://t1.daumcdn.net/cfile/tistory/99B0B04C5B1E03660A"
    profileSize={40}
  />;
}
const Division = () => {
  return <Text>Division</Text>;
}
const FriendSection = () => {
  return <Text>HeaFriendSectionder</Text>;
}
const FriendList = () => {
  return (
    <View>
      <Profile
        name="지연"
        uri="https://dimg.donga.com/wps/NEWS/IMAGE/2019/09/27/97615710.3.jpg"
        profileSize={30}
      />
      <Profile
        name="세인"
        uri="https://t1.daumcdn.net/cfile/tistory/99B0B04C5B1E03660A"
        profileSize={30}
      />
      <Profile
        name="지현"
        uri="https://dimg.donga.com/wps/NEWS/IMAGE/2019/09/27/97615710.3.jpg"
        profileSize={30}
      />
      <Profile
        name="현서"
        uri="https://t1.daumcdn.net/cfile/tistory/99B0B04C5B1E03660A"
        profileSize={30}
      />
      <Profile
        name="유림"
        uri="https://dimg.donga.com/wps/NEWS/IMAGE/2019/09/27/97615710.3.jpg"
        profileSize={30}
      />
    </View>
  )
}

// 함수형 컴포턴트
const Profile = (props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={{ uri: props.uri }}
        style={{ width: props.profileSize, height: props.profileSize }}
      />
      <Text>{props.name}</Text>
    </View>
  )
}

// class형 컴포넌트
// class Profile extends React.Component {
//   render() {
//     return (
//       <View style={{ flexDirection: "row" }}>
//         <Image
//           source={{ uri: this.props.uri }}
//           style={{ width: this.props.profileSize, height: this.props.profileSize }}
//         />
//         <Text>{this.props.name}</Text>
//       </View>
//     )
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
