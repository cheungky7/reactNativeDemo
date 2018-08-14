import { NavigationActions, createStackNavigator } from 'react-navigation';
//import { Navigator } from './Navigator';
import Feed from './Feed';
import ItemDetail from './ItemDetail';

export const AppNavigator = createStackNavigator(
    {
        Feed: { screen: Feed },
        ItemDetail: { screen: ItemDetail },
    }, {
        initialRouteName: 'Feed',
    }
)

const initialAction = { type: NavigationActions.Init };
const initialState = AppNavigator.router.getStateForAction(initialAction);


export const navReducer = (state = initialState, action) => {
    console.log(action);
    console.log(state);
    return AppNavigator.router.getStateForAction(action, state);
};

