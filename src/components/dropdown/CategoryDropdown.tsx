import { FiChevronDown } from 'react-icons/fi';
import styled from "styled-components";

const CategoryDropdown: React.FC = () => {
    const isExpanded = false;
    return (
        <Wrapper className='category-wrap'>
            <label>Category</label>
            <button className="arrow-button">
                <span className="arrow-block">
                    <FiChevronDown />
                </span>
            </button>
            {isExpanded && (<DropdownList>
                <DropdownItem >Category 1</DropdownItem>
                <DropdownItem >Category 2</DropdownItem>
                <DropdownItem >Category 3</DropdownItem>
            </DropdownList>
            )}
        </Wrapper>
    )
}

export default CategoryDropdown;

const Wrapper = styled.div`
    display: flex;
    width: 180px;
    height: 35px;
    position: relative;
    justify-content: center;
    margin-top: 2rem;
    margin-left: 2rem;
    border-radius: var(--radius);
    border: 1px solid var(--clr-grey-1);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);
    border-color: transparent;
    label {
        display: flex;
        align-items: center;
        font-size: 1rem;
        padding: 0.5rem;
    }
    .arrow-button {
        padding: 1rem;
        background: transparent;
        border: 1px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .arrow-block {
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--clr-grey-10);
        padding: 0.25rem 0.5rem;
        border-radius: var(--radius);
}`;

const DropdownList = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    border: 1px solid var(--clr-border);
    border-top: none;
    border-radius: 0 0 var(--radius) var(--radius);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    background: white;
    z-index: 10;
    list-style: none;
    padding: 0;
    margin: 0;
`;

const DropdownItem = styled.li`
    display: flex;
    justify-content: center;
    padding: 0.5rem;
    cursor: pointer;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    &:last-child {
        border-bottom: none;
    }
    &:hover {
        background: var(--clr-grey-10);
    }
`;