import 'react-native-gesture-handler';

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import DisplayStudents from '../Components/DisplayStudents'
import ProfilStudent from '../Components/ProfilStudent'


const SearchStackNavigator = createStackNavigator({
    DisplayStudents: {
        screen: DisplayStudents,
        navigationOptions: {
            title: 'Liste des étudiants JAC',
            headerStyle :{
                backgroundColor: '#ECFFFA'
            }
            
        }
    }, 
    
    ProfilStudent: {
        screen: ProfilStudent,
        navigationOptions: {
            title: "Profil",
            headerStyle :{
                backgroundColor: '#ECFFFA'
            }
        }
    }
})

export default createAppContainer(SearchStackNavigator)