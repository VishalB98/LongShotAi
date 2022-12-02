import React from 'react'
import { connect } from 'react-redux'

function KeywordHeader(props) {
    const { apiJsonData } = props;
    return (
        <div className='flex flex-col justify-around items-start align-middle p-4'>
            <div className='flex pb-4'>
                <p className='text-gray-600  font-medium'>Keyword Explorer</p>{'>'}<p className='text-gray-600  font-normal'>Keyword Overview</p>
            </div>
            <div className='flex flex-col pb-4 '>
                <div className='flex items-center ' >
                    <p className='font-bold text-xl'>Keyword: &nbsp;</p><p className=' text-gray-600  font-medium'>{apiJsonData ?  apiJsonData.topic : "Loading"}</p>
                </div>
                <div className='flex'>
                    <p className='text-gray-600  font-medium'>Database: &nbsp;</p><p className='text-gray-600  font-medium'>{apiJsonData ? apiJsonData.country : "Loading"}</p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        apiJsonData: state.apiJsonData,
        keywordResult: state.keywordResult,
        intentMap: state.intentMap,
        keywordDifficulty: state.keywordDifficulty,
        searchFilter: state.searchFilter,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(KeywordHeader)
