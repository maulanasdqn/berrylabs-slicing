"use client";
import { Button } from "@/components/atoms/button";
import { Icon } from "@iconify/react";
import { FC, ReactElement } from "react";

export const PricingSection: FC = (): ReactElement => {
  return (
    <section
      data-testid="pricing"
      className="flex md:flex-row flex-col md:items-center h-auto py-6 justify-start w-full md:px-10"
    >
      <div className="md:flex hidden flex-col gap-y-12 w-1/3 mb-10">
        <div className="flex flex-col gap-y-4">
          <h1 className="font-semibold">Core Features</h1>
          <h2 className="text-md">Files Included</h2>
        </div>

        <div className="flex flex-col gap-y-4">
          <h2 className="text-md">Free Generations</h2>
          <h2 className="text-md">Files per Upload</h2>
          <h2 className="text-md">Pages per File</h2>
          <h2 className="text-md">File size limit</h2>
          <h2 className="text-md">High-accuracy responses</h2>
          <h2 className="text-md">Mobile-friendly interface</h2>
          <h2 className="text-md">Priority support</h2>
        </div>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-1 gap-3 items-center md:items-start md:gap-0 w-full mb-28">
        <div className="flex flex-col border border-grey-50 rounded-t-[10px] md:w-[257px] w-full">
          <div className="flex flex-col gap-y-4 bg-grey-50 items-center justify-center rounded-t-[10px] p-6">
            <h1 className="text-black text-3xl">Free</h1>
            <h2 className="text-grey-400 text-center text-md">
              Suitble For Starter
            </h2>
            <span className="text-black font-bold text-3xl">IDR 0</span>
          </div>

          <div className="flex flex-col gap-y-8 bg-white md:w-[257px] w-full items-center justify-center p-6">
            <div className="flex items-center gap-x-1">
              <h2 className="text-black text-center text-md">100 Files</h2>
              <Icon icon="ph:question-light" color="#5459D8" />
            </div>
          </div>

          <div className="flex flex-col gap-y-5 bg-grey-50 md:w-[257px] w-full items-center justify-center rounded-b-[10px] p-6">
            <div className="flex items-center gap-x-1">
              <h2 className="text-black text-center text-md">100</h2>
              <Icon icon="ph:question-light" color="#5459D8" />
            </div>

            <div className="flex items-center gap-x-1">
              <h2 className="text-black text-center text-md">Up To 25 Files</h2>
            </div>

            <div className="flex items-center gap-x-1">
              <h2 className="text-black text-center text-md">
                2 Pages Per File
              </h2>
              <Icon icon="ph:question-light" color="#5459D8" />
            </div>

            <div className="flex items-center gap-x-1">
              <h2 className="text-black text-center text-md">4 MB</h2>
              <Icon icon="ph:question-light" color="#5459D8" />
            </div>

            <div className="flex flex-col gap-y-3 mb-6">
              <Icon width="20px" icon="lets-icons:check-fill" color="#54D889" />
              <Icon width="20px" icon="lets-icons:check-fill" color="#54D889" />
              <Icon width="20px" icon="lets-icons:check-fill" color="#54D889" />
            </div>

            <Button size="md">Get Started Free</Button>
          </div>
        </div>

        <div className="flex flex-col bg-white md:w-[257px] w-full">
          <div className="flex flex-col gap-y-4 bg-white items-center justify-center rounded-t-[10px] p-6">
            <h1 className="text-black text-3xl">Basic</h1>
            <h2 className="text-grey-400 text-center text-md">
              Suitable for Generalist
            </h2>
            <span className="text-black font-bold text-3xl">IDR 299,000</span>
          </div>

          <div className="flex flex-col gap-y-8 bg-grey-50 md:w-[257px] w-full items-center justify-center p-6">
            <div className="flex items-center gap-x-1">
              <h2 className="text-black text-center text-md">250 Files</h2>
              <Icon icon="ph:question-light" color="#5459D8" />
            </div>
          </div>

          <div className="flex flex-col gap-y-5 bg-white md:w-[257px] w-full items-center justify-center rounded-b-[10px] p-6">
            <div className="flex items-center gap-x-1">
              <h2 className="text-black text-center text-md">100</h2>
              <Icon icon="ph:question-light" color="#5459D8" />
            </div>

            <div className="flex items-center gap-x-1">
              <h2 className="text-black text-center text-md">Up To 25 Files</h2>
            </div>

            <div className="flex items-center gap-x-1">
              <h2 className="text-black text-center text-md">
                2 Pages Per File
              </h2>
              <Icon icon="ph:question-light" color="#5459D8" />
            </div>

            <div className="flex items-center gap-x-1">
              <h2 className="text-black text-center text-md">4 MB</h2>
              <Icon icon="ph:question-light" color="#5459D8" />
            </div>

            <div className="flex flex-col gap-y-3 mb-6">
              <Icon width="20px" icon="lets-icons:check-fill" color="#54D889" />
              <Icon width="20px" icon="lets-icons:check-fill" color="#54D889" />
              <Icon width="20px" icon="lets-icons:check-fill" color="#54D889" />
            </div>

            <Button size="md">Get Started Free</Button>
          </div>
        </div>

        <div className="flex flex-col relative border-2 border-primary rounded-[10px] md:w-[257px] w-full">
          <Button className="absolute bg-primary top-[-20px] md:left-[80px] left-[130px] text-white rounded-full w-fit p-2">
            Best Seller
          </Button>

          <div className="flex flex-col gap-y-4 bg-grey-50 items-center justify-center rounded-t-[10px] p-6">
            <h1 className="text-black text-3xl">Pro</h1>
            <h2 className="text-grey-400 text-center text-md">
              Suitable for Specialist
            </h2>
            <span className="text-black font-bold text-3xl">IDR 590,000</span>
          </div>

          <div className="flex items-center gap-x-1 bg-white w-full justify-center p-4">
            <h2 className="text-black text-center text-md">500 Files</h2>
            <Icon icon="ph:question-light" color="#5459D8" />
          </div>

          <div className="flex flex-col gap-y-5 bg-grey-50 w-full h-full items-center justify-center rounded-b-[10px] p-6">
            <div className="flex items-center gap-x-1">
              <h2 className="text-black text-center text-md">100</h2>
              <Icon icon="ph:question-light" color="#5459D8" />
            </div>

            <div className="flex items-center gap-x-1">
              <h2 className="text-black text-center text-md">Up To 25 Files</h2>
            </div>

            <div className="flex items-center gap-x-1">
              <h2 className="text-black text-center text-md">
                2 Pages Per File
              </h2>
              <Icon icon="ph:question-light" color="#5459D8" />
            </div>

            <div className="flex items-center gap-x-1">
              <h2 className="text-black text-center text-md">4 MB</h2>
              <Icon icon="ph:question-light" color="#5459D8" />
            </div>

            <div className="flex flex-col gap-y-3 mb-6">
              <Icon width="20px" icon="lets-icons:check-fill" color="#54D889" />
              <Icon width="20px" icon="lets-icons:check-fill" color="#54D889" />
              <Icon width="20px" icon="lets-icons:check-fill" color="#54D889" />
            </div>

            <Button size="md">Get Started Free</Button>
          </div>
        </div>

        <div className="flex flex-col bg-white md:w-[257px] w-full">
          <div className="flex flex-col gap-y-4 bg-white items-center justify-center rounded-t-[10px] p-6">
            <h1 className="text-black text-3xl">Premium</h1>
            <h2 className="text-grey-400 text-center text-sm mb-[5px]">
              Suitable for Agressive Specialist
            </h2>
            <span className="text-black font-bold text-3xl">IDR 999,000</span>
          </div>

          <div className="flex flex-col gap-y-8 bg-grey-50 w-full md:w-[257px] items-center justify-center p-6">
            <div className="flex items-center gap-x-1">
              <h2 className="text-black text-center text-md">1000 Files</h2>
              <Icon icon="ph:question-light" color="#5459D8" />
            </div>
          </div>

          <div className="flex flex-col gap-y-5 bg-white md:w-[257px] w-full items-center justify-center rounded-b-[10px] p-6">
            <div className="flex items-center gap-x-1">
              <h2 className="text-black text-center text-md">100</h2>
              <Icon icon="ph:question-light" color="#5459D8" />
            </div>

            <div className="flex items-center gap-x-1">
              <h2 className="text-black text-center text-md">Up To 25 Files</h2>
            </div>

            <div className="flex items-center gap-x-1">
              <h2 className="text-black text-center text-md">
                2 Pages Per File
              </h2>
              <Icon icon="ph:question-light" color="#5459D8" />
            </div>

            <div className="flex items-center gap-x-1">
              <h2 className="text-black text-center text-md">4 MB</h2>
              <Icon icon="ph:question-light" color="#5459D8" />
            </div>

            <div className="flex flex-col gap-y-3 mb-6">
              <Icon width="20px" icon="lets-icons:check-fill" color="#54D889" />
              <Icon width="20px" icon="lets-icons:check-fill" color="#54D889" />
              <Icon width="20px" icon="lets-icons:check-fill" color="#54D889" />
            </div>

            <Button size="md">Get Started Free</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
