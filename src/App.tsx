import React from "react";
import {hot} from 'react-hot-loader/root';
import {Layout} from "./shared/Layout";
import './mail.global.css'
import {Content} from "./shared/Content";
function AppComponent(){
    return (
        <Layout>
            <Content>
            </Content>
        </Layout>
    )
}
export const App = hot(AppComponent);