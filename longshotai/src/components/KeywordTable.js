import React from 'react'
import { connect } from 'react-redux'
import intentMap from '../data/intentMap';
import { keywordDifficulty } from '../utils/keywordDifficultyFormat';


function KeywordTable(props) {
    const { keywordResult, apiJsonData } = props;

    const renderRowList = (item) => {
        const intentRow = (intentMapValue) =>{
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
            if (index !== 6) {
                return (
                    <td className="p-2">
                        <div className="flex items-center justify-center">
                            { index === 5 ? item/1000000 : index === 2 ? intentRow(intentMap[item]) : index === 7 ? keywordDifficultyRow(item) : item}
                        </div>
                    </td>
                )
            }
        })
    }

    return (
        <div className='flex justify-center'>
            <div className="table-auto flex justify-center p-4 sm:w-[100%] md:w-[80%] lg:w-[70%] xl:w-[60%]">
                <table className="border">
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
                                    <tr className="bg-gray-50 border-b" >
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
    )
}

const mapStateToProps = (state) => {
    return {
        keywordResult: state.keywordResult,
        apiJsonData: state.apiJsonData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(KeywordTable)
