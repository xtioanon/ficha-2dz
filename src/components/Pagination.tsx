interface pageProp {
    onPageChange: () => void;
}

export function NextPage( {onPageChange} : pageProp)
{
    return (
        <>
        <button className="print:hidden fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg" onClick={() => {onPageChange()}}>
            &gt;
        </button>
        </>
    )
}

export function PreviousPage( {onPageChange} : pageProp)
{
    return (
        <>
        <button className="print:hidden fixed bottom-4 left-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg" onClick={() => {onPageChange()}}>
            &lt;
        </button>
        </>
    )
}