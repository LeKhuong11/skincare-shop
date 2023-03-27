import { Breadcrumb } from 'antd';
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const BreadcrumbStyled = styled(Breadcrumb)`
    &&& {
        .ant-breadcrumb-link {
            font-size:  16px;
        }
        
        
    }
    & li {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    a {
        font-size: 16px;
    }
`
export interface IBreadcrumb {
  key: number
  path: string
  namePage: string
}

interface IItems {
  crumbs: IBreadcrumb[]
}

function Breadcrumbs({crumbs}: IItems) {

  // const location = useLocation();

  // // path = home/dashboard => home | dashboard
  // let currentPath: string = ''
  // const crumbs = location.pathname.split('/')
  //   .filter(crumb => crumb !== '')
  //   .map(crumb => {
  //     currentPath += `/${crumb}`

  //     return <Breadcrumb.Item key={crumb} >
  //       <Link to={currentPath}>{crumb}</Link>
  //     </Breadcrumb.Item>
      
  //   })

    return(
       <nav> 
          <BreadcrumbStyled separator={<IoIosArrowForward />}>
            {crumbs.map(item => {

              return <Breadcrumb key={item.key}>
                <Link to={item.path}>{item.namePage}</Link>
              </Breadcrumb>
            })}
          </BreadcrumbStyled>
        </nav>
    )
}

export default Breadcrumbs