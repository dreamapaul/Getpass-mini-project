import {Image,Text,Button,Box,Modal, ModalOverlay, ModalContent,ModalBody, ModalFooter, useDisclosure} from '@chakra-ui/react'; 
import {ChevronRightIcon,AddIcon} from '@chakra-ui/icons';

    const UserhomePage = () => {
        const { isOpen, onOpen, onClose } = useDisclosure()
        return (
          <div className="UserhomePage">
            <header className="home-header">
              <Box bg={'blue.50'} maxW="1242px" maxH="68px" m='32px' marginLeft="140px" borderColor={'blue.100'} borderWidth={'thin'} borderRadius="md" color={'blue.800'}>
                 <Image src='/assets/Getpass logo.svg' position={'relative'} top='13px' left='30px'/>
                 <Button bgColor={'blue.100'} rightIcon={<ChevronRightIcon/>} top="-27px" left="1020px" textColor={'blue.500'} onClick={onOpen}>Dreama Paul</Button>
                 <Text position={'relative'} left="920px" top='-59px' fontWeight='semibold'>Log Out</Text>  
                 <Text position={'relative'} left="800px" top='-83px' fontWeight='semibold'>View Buses</Text>
                 <Text position={'relative'} left="680px" top='-107px' fontWeight='semibold'>Past Passes</Text>
              </Box>
             </header>
             <Button bgColor={'blue.400'} leftIcon={<AddIcon marginTop={'1'} h='2'/>} borderRadius='5px' top="7px" left="1160px" colorScheme={'blue,100'}>Purchase pass</Button>
             <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                         <ModalBody>
                              <Text fontWeight='bold' mb='1rem'>You can scroll the content behind the modal</Text>
                         </ModalBody>
                         <ModalFooter>
                             <Button colorScheme='blue' mr={3} onClick={onClose}>Close</Button>
                         </ModalFooter>
                     </ModalContent>
            </Modal>
          </div>
       );
    }
    
export default UserhomePage;
       