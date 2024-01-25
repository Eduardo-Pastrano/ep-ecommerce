import { Input, InputGroup, InputLeftElement, Button } from '@chakra-ui/react';
import { EditIcon, AtSignIcon, PhoneIcon } from "@chakra-ui/icons"

const Form = ({ formData, saveInputData, sendOrder }) => {
    return (
        <section className='checkout-view'>
            <form className="checkout-form" onSubmit={sendOrder}>
                <li>
                    <label htmlFor="name">Name</label>
                    <InputGroup >
                        <InputLeftElement pointerEvents='none'>
                            <EditIcon color='gray.500' />
                        </InputLeftElement>
                        <Input required placeholder='Name' size='md' type="text" name="name" id="name" value={formData.name} onChange={saveInputData} />
                    </InputGroup>
                </li>

                <li>
                    <label htmlFor="phone">Phone</label>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <PhoneIcon color='gray.500' />
                        </InputLeftElement>
                        <Input required placeholder='Phone number' size='md' type="tel" name="phone" id="phone" value={formData.phone} onChange={saveInputData} />
                    </InputGroup>
                </li>

                <li>
                    <label htmlFor="email">Email</label>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <AtSignIcon color='gray.500' />
                        </InputLeftElement>
                        <Input required placeholder='Email' size='md' type="email" name="email" id="email" value={formData.email} onChange={saveInputData} />
                    </InputGroup>
                </li>

                <li>
                    <label htmlFor="confirmEmail">Confirm email</label>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <AtSignIcon color='gray.500' />
                        </InputLeftElement>
                        <Input required placeholder='Confirm email' size='md' type="email" name="confirmEmail" id="onfirmEmail" value={formData.confirmEmail} onChange={saveInputData} />
                    </InputGroup>
                </li>

                <Button colorScheme='green' type="submit">Place order🤝🏻</Button>
            </form>
        </section>
    )
}

export default Form;