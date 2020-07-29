import React, {useEffect, useState} from "react";
import ReactPaginate from 'react-paginate';

export const InstitutionsList = ({list}) => {
    const [institutions, setInstitutions] = useState(null);
    const [pageContent, setPageContent] = useState(null);
    const [pageNum, setPageNum] = useState(null);
    const [index, setIndex] = useState(0);

    const handleChangePage = e => {
        let startNumber = e.selected * 3;
        setPageContent(institutions.slice(startNumber, startNumber + 3));
        setIndex(e.selected);
    }

    useEffect(() => {
        if (institutions !== list && list !== undefined) {
            setInstitutions(list);
            setPageContent(list.slice(0, 3));
            setPageNum(Math.ceil(list.length / 3));
            setIndex(0);
        }
    })

    return (
        <>
            <ul className={'inst__list'}>
                {pageContent !== null && pageContent.map((institution) => {
                    return (
                        <li key={institution.name} className={'inst__elem'}>
                            <div className="inst__container">
                                <h3 className={'inst__name'}>
                                    {institution.name}
                                </h3>
                                <p className={'inst__aim'}>
                                    {institution.aim}
                                </p>
                            </div>
                            <p className={'inst__items'}>
                                {institution.items}
                            </p>
                        </li>
                    )
                })}
            </ul>
            {pageNum > 1 &&
            <ReactPaginate
                pageCount={pageNum}
                pageRangeDisplayed={10}
                marginPagesDisplayed={0}
                forcePage={index}
                previousClassName={'hidden'}
                nextClassName={'hidden'}
                activeLinkClassName={'active-page'}
                containerClassName={'pagination'}
                pageLinkClassName={'page'}
                onPageChange={e => handleChangePage(e)}
            />
            }
        </>
    )
}
