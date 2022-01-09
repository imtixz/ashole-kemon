import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from '../../../../components/Layout'

function review_sent() {
    const router = useRouter()

    return (
        <Layout>
            <div className="d-flex mt-3" style={{
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
                alignItems: 'center',
                fontSize: '22px',
            }}>
                <p >Review has been sent.</p>
                <Link href={`/institution/${router.query.uuid}`}>
                    <button className='btn btn-secondary'>Go back to reviews</button>
                </Link>
            </div>
        </Layout>
    )
}

export default review_sent
