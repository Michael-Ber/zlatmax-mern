import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const KnivesCatalog = ({classNames, dataAttr}) => {

    const goods = useSelector(state => state.goodsSlice.goods);

    const removeDublicateObjects = ( arr ) => {
        const categoryArr = Array.from(new Set(arr.map(item => item.category)));
        const categoryArrRu = Array.from(new Set(arr.map(item => item.categoryRU)));
        const res = [];
        if(categoryArr.length === categoryArrRu.length) {
            for(let i = 0; i < categoryArr.length; i++) {
                res.push([categoryArr[i], categoryArrRu[i]])
            }
        }
        return res
    }

    const dataAttribute = dataAttr ? dataAttr : null;
    console.log(dataAttribute);
    const renderLiItems = goods && removeDublicateObjects(goods).map((item, i) => {
        return (
            <li key={goods[i]._id}>
                <Link to={`/category/${item[0]}`} className={classNames.li}> 
                    { item[1] }
                </Link>
            </li>
        )
    })

    return (
        <ul className={classNames.ul} data-related-to={dataAttribute}>
            { renderLiItems }
        </ul>
    )
}
