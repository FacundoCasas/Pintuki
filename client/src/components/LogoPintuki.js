import React from 'react';

import { NativeBaseProvider, Image } from "native-base";



const Logo = () => {
    <Image size={90} borderRadius={100} borderWidth={2} borderColor={"black"} m="3" source={{
        uri: "https://i.ibb.co/KjFFfmq/diego-pintuki-01.jpg" }} alt="LogoPintuki" />
  };

  export default () => {
    <NativeBaseProvider>
        <Logo></Logo>
    </NativeBaseProvider>
  }
