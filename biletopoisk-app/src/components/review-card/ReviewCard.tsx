import classes from "./ReviewCard.module.scss";
import React from "react";
import Image from "next/image";
import { Review } from "@/api-types/types";
import avatarImage from "../../../public/icons/avatar-placeholder.svg";
import classNames from "classnames";

interface Props {
  review: Review;
}

const ReviewCard = ({ review }: Props) => {
  return (
    <div className={classes.reviewContainer}>
      <div className={classes.reviewAvatarImageContainer}>
        <Image alt={`Аватар для ${review.name}`} src={avatarImage} />
      </div>

      <div className={classes.reviewTextContainer}>
        <div className={classes.nameRatingContainer}>
          <p
            className={classNames(
              classes.reviewNameRatingText,
              classes.reviewTitleText
            )}
          >
            {review.name}
          </p>
          <p className={classes.reviewTitleText}>
            Оценка:{" "}
            <span
              className={classNames(
                classes.reviewNameRatingText,
                classes.reviewTitleText
              )}
            >
              {review.rating}
            </span>
          </p>
        </div>
        <p>{review.text}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
