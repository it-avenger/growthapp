import React from 'react'
import PropTypes from 'prop-types'
import {
  View,ScrollView,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native'
import Theme from '../../../theme';
import {
  MainContainer,
  ContentContainer,
  CardContainer,
  TitleContainer,
  ButtonContainer,
  TitleText,
} from './style';
import CustomButton from '../button/CustomButton';
import RowItem from './RowItem'
import Promotion from './Promotions'
class Marketing extends React.Component {
  static navigationOptions = {
    headerVisible:false,
    headerStyle:{
      width:0,
      height:0,
    },
  }

  render () {
    return(
        <ScrollView style={{backgroundColor:'#FAFAFA',flex:1,paddingBottom:20}} contentContainerStyle={{justifyContent:'center',alignItems:'center'}}>
          <RowItem title="New Promotion" color={Theme.colors.lightBlue} buttonTitle="Add New Promotion" />
          <RowItem title="Analytics" color={Theme.colors.skyBlue} buttonTitle="View All Analytics" />
          <RowItem title="Loyalty Program" color={Theme.colors.lightBlue} buttonTitle="Create Loyalty Campaign" />
          <RowItem title="Loyalty Program" color={Theme.colors.lightBlue} buttonTitle="Create Loyalty Campaign" />
          <Promotion/>
        </ScrollView>
    )
  }
}

export default Marketing;
