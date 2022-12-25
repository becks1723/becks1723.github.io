import styled from 'styled-components'
import { Search } from 'react-feather'

/**
 * @todo implement search functionality.
 * @complete styles
 */
function SearchBox({textRef, query, setQuery, placeholder}) {

    return (
        <Container
            spellCheck='false'
            className='searchbox__container'
            hoverColor='#000'
        >
            <Search
                size={28}
                strokeWidth='1px'
                color='#fff'
                style={{
                    paddingLeft: '10px',
                    marginBottom: '1px',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                }}
            />
            <TextBox
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value)
                }}
                placeholder={placeholder}
                ref={textRef}
            />
        </Container>
    )
}

const Container = styled.form`
    width: 200px;
    height: 100%;

    display: flex;
    align-items: center;
    
    background-color: #1f1f1f;
    border: 1px solid transparent;

    transition: background-color 250ms ease-in-out;

  &:hover {
    background-color: ${props => props.hoverColor};
  }
  :focus-within {
    background-color: ${props => props.hoverColor};
    border: 1px solid white;
  }
`

const TextBox = styled.input.attrs({
    type: 'text',
})`
    all: unset;
    font-size: 12px;
    color: #dfdddd;


    &::placeholder {
        font-weight: bolder;
    }

    margin-left: 10px;

    // Come in pairs with TextBox, aligning vertically in Container
    display: inline-block;
    vertical-align: middle;

    width: 80%;
    user-select: none;

    ::placeholder {
        font-weight: 500;
    }
`

export default SearchBox
