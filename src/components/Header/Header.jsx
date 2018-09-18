import React from "react";
import {connect} from "react-redux";
import styled from "styled-components"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import  Search from '../Search/Search';

const FixedHeader = styled.div`
  display: grid;
  grid-gap:10px;
  grid-template-columns: 3fr 1fr 10fr 10fr 1fr;
  background: white;
  padding: 7px;
  border-bottom: 1px solid lightgrey;
`

const Menu = styled.div`
  padding-top: 0.5rem;
  padding-left: 1%;
  cursor: pointer;
`

const Logo = styled.img`
  width: 2.5rem;
`
const logoImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABHCAYAAACQwsCOAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAWuSURBVHhe7Zv7TxRXFMf7J/SP6C9tbdqaVtoKfeAzfdjGR21NUGl9YGOVYBsbNSWVllKLgpQlkaoYCgEUBUUoLwE1oBVWKQqIthUEFLEsLC9ZluV0z+TSzA5nZu8yC8mdmU/yjWF3zp3ZT2Z3Zs69PgUWurAE6sQSqBNLoE4sgTqxBOrEEqgTvwJdF2phaEcsOF5cBo7nFsHQpt3gOlvO3uVj194iePWtw5pZ+tGvbGuxUBU4casNnCu3wL9PzyPjeDYcxquvsK21QYHPL0jUjKEEenr7wPFMGClOGXdDE6tSx3QCh2PiSFlUnKuiWJU6phLocQyQorTitt9k1TSmEjiWV0RK0spIfCqrpjGVwJFvEkhJWnGu1v4am0rgaPIxUpJW8DZHC1MJxN8zSpJWXPnFrJrGVAKRgcXrSFFqgclJVkljOoGuokpSFJUntkxWpY7pBCIjsYdIYfIMRe1hW2tjSoGIu84OgxHR08Q5P/wcXMVVbCv/mFbgFJ6+fnD9Xg2uwjLwdPewV/kxvUC9WAJ1YgnUyVwL9HgmoeX2I6i5/DecK2mGrFw7pB2tA1t6rfTvyYI/oe6Pdujo7IeJCQ+rmhmGEIjCrtnvw8+Ha2D9llyYH5pM7oMKNnMTDlXDw55BNlpgCC3Q3tgF++JKIST8F3LMQPLSwiSIT7wAY2NuNjofqgJPZNdzhYdgC6yougOrIzLJcfRmxdoM6OwaYHvyj6rAzV/mkzuQBz8ED8EUmHe6kawPZl5flAp3/nrM9qiNcAKv1neQ9cHO8pVHYXjExfaqjnACsW+BZwg1RrCTZLvE9qqOcAKRuAOV5BjBDl7NH/UOsb3SCCmw/nonOQbm08hsOJBcDaWVbdKtjTzZJ6/Djq8LYX4Y/21ObLz2HLiQAvFr/ObytP9rX3jtIHy197x088zD0LBLEiPfv1oWvJ0Cbrf6zbaQApH4g1VSXfTus3CvvY+9Ghgxe/wfF6bce9ukhrACm2/3wKXaf9hfM2PA+UR6EqGOR559+0tZxXSEFRgs8AymjkeetRuz2NbTMb3AE9kN5PHIg495apheYFFJC3k8yvQ+HmYVvhha4Pj4BLTd7YXzpS2QbLsMX8ScgU8is+CDj49D+PtHpCbEvBD6eJRpv+9go/piOIH4+IXCdnp/214OTSL3NZM0t9JTGYYRiPeAeEHA3ytqfL3B1hmF8AKxuRC5LY8cM5gxnEBsfGIzlRprNmIogaOj47Dus2xynNmKYQTiJFDE5hxyjNmMYQT+yJ6BZxJsT2HLHj8bHtN3CRVSqG2VMYRAbLPz3rdhwpalwf6fKqRn5gcPneQiMpzapGqVMYRAvBGmapUJXWqDkvJWabrTH6YR2O09g6g6ZVBe1wMnq/KPaQRiN5mqU6a4rJVV8GEagTxtpyUr0rm+tnLudTjIsZQRXiBOM1J18mzfVcC25qexqZscSxnhBfIs38DZukBJPVJLjqWM8AJf4Wi948RSIGDnZuESGzmWMsILxPepOnneXXWMbc3Htz+UkeNQabjRyap8EUbghqhcsk4Z3okm3q/uVHBemUIYgbwf+I3FqarNTwRXXm2MCrz9hQsyKYQRyHu1xOBE+/feC8pF79mI/cL8wiZp8eWGrbkBPQrKU1lzlx2JL8IIROa6hSUPTj5RCCXwyrW5WdpGJefUDXYUvgglEAnkyhnM4OJ0CuEEYjf6vTXHyTFmmjXrfyNflwfbYhTCCURwddWm7afIcQJJyDsp0nprnDum3pcnKvo027svQgpEsGmAyzJw+Rk1nlbwqSYx5aK0uAgZc7nJ7eTBTjaFsAKncPSPSqsO8ANS48qDiy8zcxqkGiXbvGcY3qyrZevOfLalL6oCBwfHuMIDVUdFL9hIxf+ddObcTUjPuAoZWfVQUHRLei2QJmsgqAq04MMSqBNLoE4sgTqxBOoC4D9XgtSewYOufwAAAABJRU5ErkJggg=="

const HelpButton = styled.div`
  padding: 1px;
  color: #2b368c;
  text-align: right;
`

class Header extends React.Component {
    constructor(props){
      super(props)
    }
    render(){
    return (
        <FixedHeader>
          { console.log('These are props for the header:', this.props)}
          <Menu><i className="material-icons">menu</i></Menu>                
          <Link to="/home"><Logo src={logoImg}/></Link>
          <Search />
          <div></div>
          <Link to="/about">
            <div>
              <HelpButton><i className="material-icons">info</i></HelpButton>            
            </div>
           
          </Link>
        </FixedHeader>
    );
  }
};

    const mapStateToProps = (state) => {
      return {
        student: state.student
      };
    };

    const mapDispatchToProps = (dispatch) => {
      return {
        addStudentId: (id) => { dispatch(addStudentId(id)) },
        
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Header)
