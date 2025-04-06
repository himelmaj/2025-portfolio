const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params
    return (
        <>
            <div>page</div>
            <div>{slug}</div>
        </>
    )
}

export default page