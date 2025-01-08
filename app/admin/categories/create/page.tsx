"use client";
import "@/style/dashboard.scss";
import Input from "@/components/Input";
import usePostAction from "@/hooks/usePostAction";
import { category } from "@/actions/action";
import PictureInput from "@/components/PictureInput";

export default function AddCategories() {
  const { action, isPending, data } = usePostAction({
    action: category,
    defaultState: { nameError: null },
    onSuccess: () => {
      alert("Category added successfully");
    },
  });

  return (
    <>
      <div className="product__container">
        <form
          action={action}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <PictureInput
            label="Category Image"
            value={data.image}
            onChange={() => {}}
          />
          <div className="input__row">
            <Input
              label="Category Name"
              type="text"
              name="name"
              error={data.nameError}
            />
            <button
              type="submit"
              disabled={isPending}
              className="listing__page__header__actions__button"
            >
              {isPending ? "Loading..." : "Add Category"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
