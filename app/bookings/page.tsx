import BookingItem from "../_components/booking-item"
import Header from "@/_components/header"
import SignInDialog from "@/_components/sign-in-dialog"
import { Dialog } from "@/_components/ui/dialog"
import { getConcludeBookings } from "@/_data/get-concluded-bookings"
import { getConfirmedBookings } from "@/_data/get-confirmed-bookings"
import { authOptions } from "@/_lib/auth"
import { getServerSession } from "next-auth"

const Bookings = async () => {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    return (
      <>
        <Header />
        <div className="flex flex-col items-center justify-center gap-5 py-5">
          <Dialog>
            <SignInDialog />
          </Dialog>
        </div>
      </>
    )
  }
  const confirmedBookings = await getConfirmedBookings()
  const concludedBookings = await getConcludeBookings()

  return (
    <>
      <Header />
      <div className="space-y-3 p-5">
        <h1 className="text-xl font-bold">Agendamentos</h1>
        {confirmedBookings.length === 0 && concludedBookings.length === 0 && (
          <p className="text-gray-400">Você Não tem Agendamentos.</p>
        )}
        {confirmedBookings.length > 0 && (
          <>
            <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
              Confirmados
            </h2>
          </>
        )}

        {confirmedBookings.map((booking) => (
          <BookingItem
            key={booking.id}
            booking={JSON.parse(JSON.stringify(booking))}
          />
        ))}

        {concludedBookings.length > 0 && (
          <>
            <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
              Finalizados
            </h2>
          </>
        )}
        {concludedBookings.map((booking) => (
          <BookingItem
            key={booking.id}
            booking={JSON.parse(JSON.stringify(booking))}
          />
        ))}
      </div>
    </>
  )
}

export default Bookings
