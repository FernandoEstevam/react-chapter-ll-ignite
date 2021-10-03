import { useState } from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { Container, TransactionsTypeContainer, RadioBox } from './styles'

interface NewTransacitonProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransacitonModal({ isOpen, onRequestClose}: NewTransacitonProps) {
  
  const [type, setType] =  useState('deposit')
  
  return (
  <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
  > 
    <button 
      type="button" 
      onClick={onRequestClose} 
      className="react-modal-close">
      <img src={closeImg} alt="Fechar Modal" />
    </button>
    <Container>
      <h2>Cadastrar transações</h2>
      <input 
        placeholder="Titulo"
      />

      <input
        type="number" 
        placeholder="Valor"
      />

      <TransactionsTypeContainer>
        <RadioBox 
          type="button"
          onClick={() => {setType('deposit')}} 
          isActive={type === 'deposit'}
          activeColor="green"
        >
            <img src={incomeImg} alt="Entrada" />
            <span>
              Entrada
            </span>
        </RadioBox>

        <RadioBox 
          type="button"
          onClick={() => {setType('withdraw')}}   
          isActive={type === 'withdraw'}
          activeColor="red" 
        >
            <img src={outcomeImg} alt="Sáida" />
            <span>
              Saída
            </span>
        </RadioBox>
      </TransactionsTypeContainer>
      
      <input 
        placeholder="Categoria"
      />
      
      <button type="submit">Cadastrar</button>
      
    </Container>
    
  </Modal>
  )  
}

