import {Heading, Image,Text,Input,Button} from '@chakra-ui/react'; 
import {ChevronRightIcon} from '@chakra-ui/icons';
import { Link } from "react-router-dom"; 

    const SigninPage = () => {
        
        return (
          <div className="Signinpage">
            <Image src='/assets/login.svg' position={'relative'} height='800px'/>
            <Image src='/assets/Getpass logo.svg' position={'relative'} bottom='760px' left='900px'/>

            <Heading position={'relative'} fontSize='6xl' fontWeight='bold' color={'blue.900'} left="900px" top='-720px'>Create your</Heading>
            <Heading position={'relative'} fontSize='6xl' fontWeight='bold' color={'blue.900'} left="900px" top='-740px'>account.</Heading>

            <Text position={'relative'} fontSize='18px' fontWeight='normal' color={'blue.700'} left="900px" top='-730px'>Sign in to get Started</Text>

            <Text position={'relative'} fontSize='18px' fontWeight='medium' color={'blue.800'} left="900px" top='-700px'>Name</Text>  
            <Input placeholder='Enter your name' variant={'filled'} size='md' width='500px' left="900px" top='-695px'/>

            <Text position={'relative'} fontSize='18px' fontWeight='medium' color={'blue.800'} left="900px" top='-670px'>Username</Text>  
            <Input placeholder='Enter your username' variant={'filled'} size='md' width='500px' left="900px" top='-665px'/>
            
            <Text position={'relative'} fontSize='18px' fontWeight='medium' color={'blue.800'} left="900px" top='-640px'>Password</Text>  
            <Input placeholder='Enter your password' variant={'filled'} size='md' width='500px' left="900px" top='-635px'/>
            <Link to={'/loginpage'}>
                <Button bgColor={'blue.400'} rightIcon={<ChevronRightIcon/>} fontWeight='normal' fontSize='19px' width='500px' top="-560px" left="400px" colorScheme={'gray.500'}>Sign In</Button>
            </Link>  
         </div>
        );
    }     
export default SigninPage;
