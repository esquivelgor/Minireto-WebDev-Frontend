import { useState, useEffect } from 'react';

function HomePage({ data }) {
    if (!data) {
        return <div>Loading...</div>
    }

    return <div>{JSON.stringify(data)}</div>
}

export async function getServerSideProps() {
    const res = await fetch("http://localhost:8080/api/comments")
    const data = await res.json();

    return { props: { data } }
}

export default HomePage