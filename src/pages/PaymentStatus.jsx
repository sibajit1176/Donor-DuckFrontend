import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PaymentHeader from "../components/payment/PaymentHeader";
import PaymentSuccess from "../components/payment/PaymentSuccess";
import PaymentFailed from "../components/payment/PaymentFailed";
import PaymentPending from "../components/payment/PaymentPending";
import DonationReceipt from "../components/payment/DonationReceipt";

import { donationStatus } from "../services/donation.service";
import { downloadReceipt } from "../utils/receiptPdf";

const PaymentStatus = () => {

    // const [searchParams] = useSearchParams();

    const { order_id } = useParams();

    const [loading, setLoading] = useState(true);

    const [payment, setPayment] = useState(null);

    useEffect(() => {

        if (order_id) {

            fetchPaymentStatus();

        }

    }, [order_id]);

    const fetchPaymentStatus = async () => {

        try {
            const orderId = order_id
            const result = await donationStatus(orderId);

            setPayment(result.payment);

        } catch (error) {

            console.log(error);

            setPayment({
                status: "FAILED",
            });

        } finally {

            setLoading(false);

        }

    };
    const handleDownload = () => {

        downloadReceipt(payment);

    };

    if (loading) {

        return (

            <div className="h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white">

                <div className="flex flex-col items-center gap-5">

                    <div className="h-16 w-16 rounded-full border-4 border-green-200 border-t-green-600 animate-spin" />

                    <h2 className="text-xl font-semibold text-gray-700">

                        Verifying your payment...

                    </h2>

                    <p className="text-gray-500">

                        Please wait a moment.

                    </p>

                </div>

            </div>

        );

    }

    return (

        <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50">

            <div className="max-w-5xl mx-auto px-6 py-10 space-y-8">

                <PaymentHeader />

                {payment?.status === "SUCCESS" && (

                    <>
                        <PaymentSuccess payment={payment} onDownload={handleDownload}/>

                        <DonationReceipt payment={payment} onDownload={handleDownload} />
                    </>

                )}

                {payment?.status === "FAILED" && (

                    <PaymentFailed payment={payment} />

                )}

                {payment?.status === "PENDING" && (

                    <PaymentPending payment={payment} />

                )}

            </div>

        </div>

    );

};

export default PaymentStatus;