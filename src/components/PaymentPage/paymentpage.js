import {Image,Text,Button,Box,Heading,Flex,Container} from '@chakra-ui/react'; 
import {ChevronRightIcon,AddIcon} from '@chakra-ui/icons';
import React from 'react';
import { useState } from 'react';

    const PaymentPage = () => {
      const [isDrawerOpen, setIsDrawerOpen] = useState(false);
      const handleDrawerOpen = () => {
        setIsDrawerOpen(true);};
      const handleDrawerClose = () => {
        setIsDrawerOpen(false);};
        
        const textStyle = {
         transform: 'rotate(270deg)',};
        return (
          <div className="UserhomePage">
            <header className="home-header">
              <Box bg={'blue.50'} maxW="1242px" maxH="68px" m='32px' marginLeft="140px" borderColor={'blue.100'} borderWidth={'thin'} borderRadius="md" color={'blue.800'}>
                 <Image src='/assets/Getpass logo.svg' position={'relative'} top='13px' left='30px'/>
                 <Button bgColor={'blue.100'} rightIcon={<ChevronRightIcon/>} top="-27px" left="1020px" textColor={'blue.500'}>Dreama Paul</Button>
                 <Text position={'relative'} left="920px" top='-59px' fontWeight='semibold'>Log Out</Text>  
                 <Text position={'relative'} left="800px" top='-83px' fontWeight='semibold'>View Buses</Text>
                 <Text position={'relative'} left="680px" top='-107px' fontWeight='semibold'>Past Passes</Text>
              </Box>
             </header>
             <Button onClick={handleDrawerOpen} bgColor={'blue.400'} leftIcon={<AddIcon marginTop={'1'} h='2'/>} borderRadius='5px' top="20px" left="1160px"textColor={'blue.50'} >Purchase pass</Button>
             <Heading position={'relative'} fontSize='4xl' fontWeight='bold' color={'blue.800'} left="170px" top='-25px'>Your Passes</Heading>
        
            <Flex bgColor={'blue.50'} height='70px' marginTop='20px' width='1017px' marginLeft='250px' borderColor={'blue.100'} borderWidth={'thin'} borderRadius='6px' > 
                <Box bgColor={'blue.200'} width='70px' height='36px' marginLeft='-17px' marginTop='17px' textAlign={'center'} borderRadius='6px' lineHeight={'7'} fontSize={'xs'} style={textStyle}>Bus No.</Box>
                <Box bgColor={'blue.100'} width='80px' height='70px' marginLeft='-22px' textColor={'blue.500'} position={'relative'}  lineHeight='65px' fontWeight={'medium'} fontSize={'5xl'} textAlign={'center'}>12</Box>
                <Text position={'relative'} textColor={'gray.400'} left="150px" top='10px' fontSize={'smaller'} fontWeight='normal'>From</Text>
                <Text position={'relative'} textColor={'blue.700'} left="120px" top='30px' fontSize={'lg'} fontWeight='semibold'>FISAT College</Text>
                <Text position={'relative'} textColor={'gray.400'} left="400px" top='10px' fontSize={'smaller'} fontWeight='normal'>Destination</Text>
                <Text position={'relative'} textColor={'blue.700'} left="332px" top='30px' fontSize={'lg'} fontWeight='semibold'>Chalakudy</Text>
            </Flex>

            <Flex bgColor={'blue.50'} height='70px' marginTop='8px' width='1017px' marginLeft='250px' borderColor={'blue.100'} borderWidth={'thin'} borderRadius='6px' > 
                <Box bgColor={'blue.200'} width='70px' height='36px' marginLeft='-17px' marginTop='17px' textAlign={'center'} borderRadius='6px' lineHeight={'7'} fontSize={'xs'} style={textStyle}>Bus No.</Box>
                <Box bgColor={'blue.100'} width='80px' height='70px' marginLeft='-22px' textColor={'blue.500'} position={'relative'}  lineHeight='65px' fontWeight={'medium'} fontSize={'5xl'} textAlign={'center'}>12</Box>
                <Text position={'relative'} textColor={'gray.400'} left="150px" top='10px' fontSize={'smaller'} fontWeight='normal'>From</Text>
                <Text position={'relative'} textColor={'blue.700'} left="120px" top='30px' fontSize={'lg'} fontWeight='semibold'>FISAT College</Text>
                <Text position={'relative'} textColor={'gray.400'} left="400px" top='10px' fontSize={'smaller'} fontWeight='normal'>Destination</Text>
                <Text position={'relative'} textColor={'blue.700'} left="332px" top='30px' fontSize={'lg'} fontWeight='semibold'>Chalakudy</Text>
            </Flex>

            <Flex bgColor={'blue.50'} height='70px' marginTop='8px' width='1017px' marginLeft='250px' borderColor={'blue.100'} borderWidth={'thin'} borderRadius='6px' > 
                <Box bgColor={'blue.200'} width='70px' height='36px' marginLeft='-17px' marginTop='17px' textAlign={'center'} borderRadius='6px' lineHeight={'7'} fontSize={'xs'} style={textStyle}>Bus No.</Box>
                <Box bgColor={'blue.100'} width='80px' height='70px' marginLeft='-22px' textColor={'blue.500'} position={'relative'}  lineHeight='65px' fontWeight={'medium'} fontSize={'5xl'} textAlign={'center'}>12</Box>
                <Text position={'relative'} textColor={'gray.400'} left="150px" top='10px' fontSize={'smaller'} fontWeight='normal'>From</Text>
                <Text position={'relative'} textColor={'blue.700'} left="120px" top='30px' fontSize={'lg'} fontWeight='semibold'>FISAT College</Text>
                <Text position={'relative'} textColor={'gray.400'} left="400px" top='10px' fontSize={'smaller'} fontWeight='normal'>Destination</Text>
                <Text position={'relative'} textColor={'blue.700'} left="332px" top='30px' fontSize={'lg'} fontWeight='semibold'>Chalakudy</Text>
            </Flex>
          
            <Container position={'relative'} boxSize={'lg'} height={'container.md'} top='-480' left='500px'  bgColor={'white'} closeOnOverlayClick={false}  isOpen={isDrawerOpen} onClose={handleDrawerClose}>
               <Box width='130px' marginTop='125px' marginLeft='15px' height='6px' bgColor={'blue.100'}></Box>
               <Box width='130px' marginTop='-6px' marginLeft='160px' height='6px' bgColor={'blue.400'}></Box>
               <Box width='130px' marginTop='-6px' marginLeft='305px' height='6px' bgColor={'blue.100'}></Box>
              <Heading  position={'relative'} left='14px' top='10px' color={'blue.900'} fontSize={'5xl'}>Purchase</Heading>
              <Heading  position={'relative'} left='14px' top='12px' color={'blue.900'} fontSize={'5xl'}>Pass</Heading>
            </Container>
          </div>
       );
    }
    
export default PaymentPage;