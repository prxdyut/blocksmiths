import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, useBalance, useBlockNumber } from 'wagmi'
import { formatEther } from 'viem'

export default function Home() {
  const { address, isConnected } = useAccount()
  const { data: balance } = useBalance({
    address: address,
  })
  const { data: blockNumber } = useBlockNumber()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Welcome to{' '}
            <span className="text-indigo-600">Blocksmiths</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            A Web3 application built with Wagmi and Next.js
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <ConnectButton />
        </div>

        {isConnected && (
          <div className="mt-8 bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Wallet Information
            </h2>
            <div className="space-y-3">
              <div>
                <span className="text-sm font-medium text-gray-500">Address:</span>
                <p className="mt-1 text-sm text-gray-900 font-mono break-all">
                  {address}
                </p>
              </div>
              
              {balance && (
                <div>
                  <span className="text-sm font-medium text-gray-500">Balance:</span>
                  <p className="mt-1 text-sm text-gray-900">
                    {formatEther(balance.value)} {balance.symbol}
                  </p>
                </div>
              )}
              
              {blockNumber && (
                <div>
                  <span className="text-sm font-medium text-gray-500">Current Block:</span>
                  <p className="mt-1 text-sm text-gray-900">
                    {blockNumber.toString()}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Start building your Web3 application with Wagmi hooks and RainbowKit
          </p>
        </div>
      </div>
    </div>
  )
}