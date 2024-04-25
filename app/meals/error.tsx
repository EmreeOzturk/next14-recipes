"use client"
const MealsError = ({ error }: {
    error: Error
}) => {
    return (
        <div
            className="text-7xl mt-32 loading flex flex-col gap-20"
        >
            <h1>
                An error occurred
            </h1>
            {error.message}
        </div>
    )
}

export default MealsError