// counter.actions.ts
"use server";

export async function incrementCounter(
  prevState: { counter: number },
  formData: FormData
): Promise<{ counter: number }> {
  try {
    const current = Number(formData.get("counter") ?? 0);
    return { counter: current + 1 };
  } catch (error) {
    throw new Error("Something went wrong");
  }
}

export async function decrementCounter(
  prevState: { counter: number },
  formData: FormData
): Promise<{ counter: number }> {
  try {
    const current = Number(formData.get("counter") ?? 0);
    return { counter: current - 1 };
  } catch (error) {
    throw new Error("Something went wrong");
  }
}


// export async function incrementCounter(prevState:any,formData: FormData):Promise<number> {
//     return new Promise((resolve, reject) => {
//         try {
//             const counter = Number(formData.get("counter")) + 1;
//             resolve(counter);
//         } catch (error: unknown) {
//             if (error instanceof Error) {
//                 reject(error.message);
//             } else {
//                 reject("Something went wrong");
//             }
//         }
//     })
// }

// export async function decrementCounter(prevState:any,formData: FormData):Promise<number> {
//     return new Promise((resolve, reject) => {
//         try {
//             const counter = Number(formData.get("counter")) - 1;
//             resolve(counter);
//         } catch (error: unknown) {
//             if (error instanceof Error) {
//                 reject(error.message);
//             } else {
//                 reject("Something went wrong");
//             }
//         }
//     })

// }

