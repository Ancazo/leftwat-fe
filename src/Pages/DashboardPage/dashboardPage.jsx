import React from 'react'
import { TopNavBar, SmallButton, FormTextField, Button,Title } from '../../Components'
import './dashboardPage.css'
import { ThemeToggleService } from "../../services";

export const DashboardPage = (props) => {
    ThemeToggleService('red')

    return (
        <div className=''container>
            <TopNavBar />
            <div className='dashboard'>
                <div className='col1'>
                        <SmallButton text='History'/>
                        <SmallButton text='account'/>
                </div>
                <div className='col2'>
                    <Title title='Username'/>
                    <form action="">
                    <FormTextField 
                        name='email' 
                        type ='text' 
                        placeholder = 'xyz@gmail.com'
                    />
                    <FormTextField 
                        name = 'password' 
                        type = 'password'
                    />
                    <Button text = 'Change password' style ={props.buttonStyling}/>
                </form>
                    
                </div>
                <div className='col3'>
                    <Title title='My Fridge Overview'/>
                    <div className='image'>
                        chart here
                    </div>
                </div>
            </div>
        </div>
    )
}