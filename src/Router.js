/*Defini all router that user can visit*/
import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
	return(
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="auth">
					<Scene key="login" initial
						component={LoginForm} 
						title="Please Login">
					</Scene>
				</Scene>
				<Scene key="main">
					<Scene 
						key="employeeList" 
						rightTitle="Add"
						onRight={() => Actions.employeeCreate()}
						leftTitle=""
						component={EmployeeList}
						title="Employees">
					</Scene>

					<Scene
						key="employeeCreate"
						component={EmployeeCreate}
						title="Create Employee">
					</Scene>
					<Scene
						key="employeeEdit"
						component={EmployeeEdit}
						title="Edit Employee">
					</Scene>
				</Scene>

			</Scene>
		</Router>
	);
}

export default RouterComponent
