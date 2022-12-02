import React from 'react'
import { connect } from 'react-redux'
import {setSearchFilter, setKeywordResult, setKeywordMetric, setKeywordDifficulty, setIntentMap} from '../../src/redux/action'
import intentMap from '../data/intentMap';
import { keywordDifficulty } from '../utils/keywordDifficultyFormat';


function KeywordTable(props) {
    const { keywordResult, apiJsonData, searchFilter } = props;
    console.log(searchFilter)

    const setSearchMetrics = (e) => {
        let keywordMetric = props.keywordResult[e.target.id]
        props.setKeywordMetric(keywordMetric)
        console.log(keywordMetric[7])
        props.setKeywordDifficulty(keywordMetric[7])
        props.setIntentMap(intentMap[keywordMetric[2]])

    }

    const renderRowList = (item,key) => {
        const intentRow = (intentMapValue) =>{
            console.log(intentMapValue)
            return(
                <span className='h-[25px] w-[25px] rounded-md flex justify-center items-center' style={{
                    backgroundColor: intentMapValue.color.bg
                    
                }}>
                    <p className='text-xs text-center'>{intentMapValue.type[0]}</p>
                </span>
            )
        }
        const keywordDifficultyRow = (keywordDifficultyValue) =>{
            const difficulty = keywordDifficulty(keywordDifficultyValue);
            return(
                <>
                    <p>{keywordDifficultyValue}</p>
                    &nbsp;
                    <span className='h-[10px] w-[10px] rounded-xl'
                        style={{
                            backgroundColor: difficulty.color
                        }}
                    ></span>
                </>
                    
            )
        }
        return item.map((item, index) => {
            console.log(item,index)
            if (index !== 6) {
                return (
                    <td className="p-2" id={key}>
                        <div className="flex items-center justify-center"  id={key} >
                            { index === 5 ? item/1000000 : index === 2 ? intentRow(intentMap[item]) : index === 7 ? keywordDifficultyRow(item) : item}
                        </div>
                    </td>
                )
            }
        })
    }

    const setFilter = (filter) =>{
        props.setSearchFilter(filter);
        const keywordResult = apiJsonData[filter];
        props.setKeywordResult(keywordResult);
    }

    return (
        <>
        <div className='flex justify-center'>
            <div className='p-6 pb-2 flex justify-between w-full sm:w-[100%] md:w-[80%] lg:w-[70%] xl:w-[60%]'>
                    <div className='flex justify-start'>
                        <div className='p-2 rounded-l-md border-r-2 border-gray-300 cursor-pointer' style={{
                            backgroundColor: searchFilter === 'raw_broadmatch_data' ? '#bfe3ff' : '#e2e8f0'
                        }}
                        onClick={() => {setFilter('raw_broadmatch_data')}}
                        >
                            Broad Match
                        </div>
                        <div className='p-2 cursor-pointer' style={{
                            backgroundColor: searchFilter === 'raw_related_data' ? '#bfe3ff' : '#e2e8f0'
                        }}
                        onClick={() => {setFilter('raw_related_data')}}
                        >
                            Realted
                        </div>
                        <div className='bg-slate-200 p-2 rounded-r-md border-l-2 border-gray-300 cursor-pointer' style={{
                            backgroundColor: searchFilter === 'raw_question_data' ? '#bfe3ff' : '#e2e8f0'
                        }}
                        onClick={() => {setFilter('raw_question_data')}}
                        > 
                            Questions
                        </div>
                    </div>
                    <div className='bg-[#7114f4] text-white p-2 rounded-md'>
                        Add to List
                    </div>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center overflow-x-auto'>
            <div className="table-auto flex justify-center p-4 sm:w-[100%] md:w-[80%] lg:w-[70%] xl:w-[60%]">
                <table className="border w-full p-2">
                    <thead>
                        <tr className="bg-gray-100 border-b">
                            <th className="border-r p-2">
                                <input type="checkbox" />
                            </th>
                            {
                                apiJsonData && apiJsonData["columnNames"].map((item, index) => {
                                    if (item !== "Trends") {
                                        return (
                                            <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                                <div className="flex items-center justify-center">
                                                    {item}
                                                </div>
                                            </th>
                                        )
                                    }
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            keywordResult && keywordResult.map((item, index) => {
                                return (
                                    <tr className="bg-gray-50 border-b" onClick={(e) =>{setSearchMetrics(e)}}>
                                        <td className="p-2">
                                            <input type="checkbox" />
                                        </td>
                                        {renderRowList(item,index)} 
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        keywordResult: state.keywordResult,
        apiJsonData: state.apiJsonData,
        searchFilter: state.searchFilter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSearchFilter: (filter) => dispatch(setSearchFilter(filter)),
        setKeywordResult: (keywordResult) => dispatch(setKeywordResult(keywordResult)),
        setKeywordMetric: (keywordMetric) => dispatch(setKeywordMetric(keywordMetric)),
        setKeywordDifficulty: (keywordDifficulty) => dispatch(setKeywordDifficulty(keywordDifficulty)),
        setIntentMap: (intentMap) => dispatch(setIntentMap(intentMap))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(KeywordTable)
