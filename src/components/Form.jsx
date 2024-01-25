import { Input, InputGroup, InputLeftElement, Button } from '@chakra-ui/react';
import { EditIcon, AtSignIcon, PhoneIcon } from "@chakra-ui/icons"

const Form = ({ formData, saveInputData, sendOrder }) => {
    return (
        <div className='checkout-view'>
            <form className="checkout-form" onSubmit={sendOrder}>
                <div>
                    <label htmlFor="name">Name</label>
                    <InputGroup >
                        <InputLeftElement pointerEvents='none'>
                            <EditIcon color='gray.500' />
                        </InputLeftElement>
                        <Input placeholder='Name' size='md' type="text" name="name" id="name" value={formData.name} onChange={saveInputData} />
                    </InputGroup>
                </div>

                <div>
                    <label htmlFor="name">Phone</label>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <PhoneIcon color='gray.500' />
                        </InputLeftElement>
                        <Input placeholder='Phone number' size='md' type="tel" name="phone" id="phone" value={formData.phone} onChange={saveInputData} />
                    </InputGroup>
                </div>

                <div>
                    <label htmlFor="name">Email</label>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <AtSignIcon color='gray.500' />
                        </InputLeftElement>
                        <Input placeholder='Email' size='md' type="email" name="email" id="email" value={formData.email} onChange={saveInputData} />
                    </InputGroup>
                </div>

                <Button colorScheme='green' type="submit">Place order🤝🏻</Button>
            </form>
        </div>
    )
}

export default Form;